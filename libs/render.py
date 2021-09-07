import subprocess
from bs4 import BeautifulSoup
import json
import os


env = os.environ.get("NODE_ENV")

def render(view):
    if env == 'production':
        out = subprocess.run(['node', './build/main.js', f"{view}"], stdout=subprocess.PIPE) \
            .stdout.decode().replace('\n', '')
    else:
        out = subprocess.run(['node', build(), f"{view}"], stdout=subprocess.PIPE) \
            .stdout.decode().replace('\n', '')
    
    # stream emulator
    for char in connect(out, view):
        yield char.encode()

def build():
    build_path = './build/'

    subprocess.Popen(
        ['rm', '-rf', build_path], stdout=subprocess.PIPE, shell=True).wait()

    subprocess.Popen(
        ['webpack', '--json=stats.json'], stdout=subprocess.PIPE, shell=True).wait()

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

    

    
