# README

Creates a persistent volume claim (pvc) into which the results get saved.

## Setup

```sh
kubectl apply -f storage-class.yml
kubectl apply -f persistent-volume.yml
kubectl apply -f file-transfer.yml
kubectl cp script.js graphql-file-transfer:/mnt/data/script.js
kubectl delete -f file-transfer.yml
kubectl apply -f custom-resource.yml
```

## Cleanup

```sh
kubectl delete -f custom-resource.yml
kubectl delete -f file-transfer.yml
kubectl delete -f persistent-volume.yml
kubectl delete -f storage-class.yml
``
