import subprocess
import json
import io
import os


def render():
    env = os.environ.get("NODE_ENV")

    if env == 'production':
        out = subprocess.run(['node', './build/main.js'], stdout=subprocess.PIPE) \
            .stdout.decode().replace('\n', '')
    else:
        out = subprocess.run(['node', build()], stdout=subprocess.PIPE) \
            .stdout.decode().replace('\n', '')

    # stream emulator
    for char in out:
        yield char.encode()

def build():
    build_path = './build/'
    stats = subprocess.Popen(
        ['webpack', '--json=stats.json'], stdout=subprocess.PIPE, shell=True).stdout
    stats = io.BufferedReader(stats).read()
    with open('stats.json', 'r') as file:
        chunk = json.load(file)['assetsByChunkName']
        return build_path + chunk['main'][1]
