from sklearn.metrics import silhouette_score
from sklearn.cluster import KMeans
import numpy as np
import matplotlib.pyplot as plt
import random

import matplotlib.cm as cm

MAX_PORT = 65536

def find_optimal_k_for_kmeans(binary_open_services_arr):
    sil_score = []
    kmax = 6

    
    # dissimilarity would not be defined for a single cluster, thus, minimum number of clusters should be 2
    for k in range(2, kmax+1):
        x = binary_open_services_arr
        kmeans = KMeans(n_clusters = k).fit(x)
        labels = kmeans.labels_
        sil_score.append(silhouette_score(x, labels, metric = 'euclidean'))
        # print("cycle " + str(k))
    print(sil_score)
    max_k = int(np.where(max(sil_score) == sil_score)[0]) + 2
    # print(max_k)
    return max_k

def get_cluster_foreach_ip(ip_arr, optimal_k, binary_open_services_arr):
    x = binary_open_services_arr
    kmeans = KMeans(n_clusters= optimal_k).fit(x)
    labels = kmeans.labels_
    return list(zip(ip_arr, labels))



def parse_data_to_binary_array(services_ip_dict):
    binary_services_ip_dict = dict()

    for ip, open_services in services_ip_dict.items():
        binary_services = [0] * (MAX_PORT + 1)
        for port in open_services:
            binary_services[port] = 1
        binary_services_ip_dict[ip] = binary_services
    
    # print(binary_services_ip_dict)
    return binary_services_ip_dict

def transform_point(cluster_index):
    add_noise = lambda x: x + random.randrange(-10000,10000) / 5000.0
    return add_noise(cluster_index * 10)


def save_plot(network_id, points):
    names = list(map(lambda point: point[0], points))
    color_indices = list(map(lambda point: point[1], points))
    y, z = list(map(transform_point, color_indices)), list(map(transform_point, color_indices))

    colors = cm.rainbow(np.linspace(0, 1, max(color_indices)+1))

    fig, ax = plt.subplots()
    for i in range(len(y)):
        ax.scatter(z[i], y[i], color=colors[color_indices[i]])

    for i, txt in enumerate(names):
        ax.annotate(txt, (z[i], y[i]))
    ax.axis('off')

    plt.savefig(network_id + '.png')
    # plt.show()


def cluster(network_id, network):
    binary_services_ip_dict = parse_data_to_binary_array(network)
    binary_open_services_arr = np.array(list(binary_services_ip_dict.values()))
    ip_arr = np.array(list(binary_services_ip_dict.keys()))
    optimal_k = find_optimal_k_for_kmeans(binary_open_services_arr)
    points = get_cluster_foreach_ip(ip_arr, optimal_k, binary_open_services_arr)

    save_plot(network_id, points)
    