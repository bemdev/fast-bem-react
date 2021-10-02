import subprocess
from bs4 import BeautifulSoup
import json
import os


env = os.environ.get("NODE_ENV")
first_boot = True

def render(view):
    if env == 'production':
        out = subprocess.run(['node', './build/main.js', f"{view}"], stdout=subprocess.PIPE) \
            .stdout.decode().replace('\n', '')
    else:
        out = subprocess.run(['node', build(), f"{view}"], stdout=subprocess.PIPE) \
            .stdout.decode().replace('\n', '')
    return connect(out, view)

def build():
    global first_boot
    mode = env == 'production'
    build_path = './build/'

    if first_boot:
        subprocess.Popen(
            ['webpack', '--json=stats.json'], stdout=subprocess.PIPE, shell=mode)

    first_boot = False

    with open('stats.json', 'r') as file:
        chunk = json.load(file)['assetsByChunkName']
        return build_path + chunk['main'][1]

def connect(html, data):
    soup = BeautifulSoup(html, 'lxml')
    soup.find(id='data').insert(0, f"{data}"
        .replace("'", '"')
        .replace("True", "true")
        .replace("False", "false")
        .replace("\\", ""))
    return str(soup).replace('\n', '')

