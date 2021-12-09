from flask import Flask, render_template, request
from os import path
import json
import atexit

import ml


class Store:
    networks = {}
    def __init__(self, db_path='db.db'):
        self.db_path = db_path

        if path.isfile(self.db_path):
            with open(self.db_path) as f:
                self.networks = json.loads(f.read())

        atexit.register(self.destructor)

    def destructor(self):
        if self.networks:
            mode = 'w' if path.isfile(self.db_path) else 'w+'
            with open(self.db_path, mode) as fo:
                fo.write(json.dumps(self.networks))

def analyze_network(network_id, network):
    data = {}
    for host in network['hosts']:
        data[host['ip']] = list(map(lambda service: service['port'], host['open_services']))
    
    ml.cluster(network_id, data)



app = Flask(__name__)
store = Store()

@app.route('/db', methods=['GET'])
def db():
    return json.dumps(store.networks)

@app.route('/photo')
def get_network_cluster():
    network_id = request.args.get('network_id')
    return network_id

@app.route('/networks')
def networks():
    print(store.networks.keys())
    return json.dumps(list(store.networks.keys()))


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/set_network', methods=['POST'])
def set_network():
    network = request.get_json()
    network_id = network['network_id']

    store.networks[network_id] = network
    analyze_network(network_id, network)

    return "OK"


app.run()