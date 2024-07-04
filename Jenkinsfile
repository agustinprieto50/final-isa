pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('849eee9a-ace5-4c54-b0ea-59f0ddab587f')
        DOCKERHUB_REPO = 'agustinprieto50/mystore'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                script {
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/agustinprieto50/final-isa', credentialsId: '21a6c28d-f9d2-4981-8458-99545e2e715f']]])
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def customImage = docker.build("$DOCKERHUB_REPO")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        customImage.push('latest')
                    }
                }
            }
        }
    }
}
