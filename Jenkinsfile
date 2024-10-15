pipeline{
    agent any
    stages{
        stage('Build') {
            steps {
                bat '''
                    npm i -D @playwright/test
                    npx palywrihgt install
                '''
            }
        }
        stage('Help') {
            steps {
                bat '''
                    npx playwright test --help
                '''
            }
        }
        stage('Testing') {
            steps {
                bat '''
                    npx playwright test --list
                    npx playwright test
                '''
            }
            // post {
            //     success {
            //         archiveArtifacts(artifacts: '*.png', followSymlinks: false)
            //         // bat 'del /Q *.png'
            //     }
            // }
        }
    }
}