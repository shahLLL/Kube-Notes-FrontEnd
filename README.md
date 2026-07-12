# Kube-Notes-FrontEnd
<div align="center">
  <img src="images/background-photo.png" alt="Vite+React Logo" width="75%"/>
  <br><br>
</div>

## 👀 Overview
This is a [**React**](https://react.dev/) Repository that servers as the front-end for a larger [**overall project**](https://github.com/shahLLL/Kube-Notes-Infra) and is powered by [**Vite.**](https://vite.dev/)

The project is a distributed note taking service that is meant to be deployed and managed using [**Kubernetes.**](https://kubernetes.io/)

## 🛠️ Usage
This repository can be run in two different ways, either by using Docker or Node. 

This Frontend App communicates with two distinct Backend Services:
- [**Auth Service:**](https://github.com/shahLLL/Kube-Notes-Auth) Responsible For Authentication
- [**Notes Service:**](https://github.com/shahLLL/Kube-Notes-Notes) Responsible For Note CRUD Operations
The URLs must be specified by user for full functionality.

If this is confusing please checkout the [**Main Repo**](https://github.com/shahLLL/Kube-Notes-Infra) of this project.

This project makes use of a [**Makefile**](https://wiki.osdev.org/Makefile). The following targets are available for convinence:

`make install`

Installs project dependencies locally

`make config`

Prompts for service URLs and configures within React App.

`make build`

Builds React Application

`make start`

Starts React App/Server

`make docker-build`

Containerizes Application by creating Docker Image

`make docker-start`

Runs Containerized Version of React App, Port 3000 by default

## 🍴 Forking & Contribution
Contributions and feedback are more than welcomed. 

When contributing to this project or using it in any way, please do pay attention to: [**LICENSE**](https://github.com/shahLLL/Kube-Notes-FrontEnd?tab=Apache-2.0-1-ov-file)

☕☕☕**CHEERS AND THANK YOU**☕☕☕
