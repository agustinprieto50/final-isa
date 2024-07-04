pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('849eee9a-ace5-4c54-b0ea-59f0ddab587f')
        DOCKERHUB_REPO = 'agustinprieto50/mystore'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/agustinprieto50/final-isa'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKERHUB_REPO}")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        docker.image("${DOCKERHUB_REPO}").push('latest')
                    }
                }
            }
        }
    }
}
