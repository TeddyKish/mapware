from flask import Flask, render_template, request
from os import path
import json
import atexit

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
        data[host['ip']] = list(map(lambda service: service['port'], host['open-services']))
    print(data)



app = Flask(__name__)
store = Store()

@app.route('/db', methods=['GET'])
def db():
    return json.dumps(store.networks)

@app.route('/cluster')
def get_network_cluster():
    pass


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/set_network', methods=['POST'])
def set_network():
    network = request.get_json()
    network_id = network['network_id']

    del network['network_id']
    store.networks[network_id] = network

    analyze_network(network_id, network)

    return "OK"


app.run()