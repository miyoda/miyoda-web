import { Component, OnInit } from '@angular/core';
import { KnowledgeItem } from './knowledge-item/knowledge-item.component';

interface KnowledgeCategory {
  name: string;
  description: string;
  items: {
    name: string;
    items: KnowledgeItem[];
  }[];
}

@Component({
  selector: 'app-section-knowledge',
  templateUrl: './section-knowledge.component.html',
  styleUrls: ['./section-knowledge.component.scss']
})
export class SectionKnowledgeComponent implements OnInit {

  knowledge: KnowledgeCategory[] = [
    {
      name: 'Backend',
      description: 'Herramientas, lenguajes y frameworks de la parte servidora',
      items: [
        {
          name: 'Java Stack',
          items: [
            {name: 'Java', img: 'assets/img/knowledges/java.png', expert: true, url: 'https://www.java.com'},
            {name: 'Spring', img: 'assets/img/knowledges/spring.png', expert: true, url: 'https://spring.io'},
            {name: 'Micronaut', img: 'assets/img/knowledges/micronaut.png', expert: false, url: 'https://micronaut.io'},
            {name: 'MapStruct', img: 'assets/img/knowledges/mapstruct.png', expert: false, url: 'https://mapstruct.org/'},
            {name: 'Lombok', img: 'assets/img/knowledges/lombok.png', expert: false, url: 'https://projectlombok.org/'},
          ],
        },
        {
          name: 'JS Stack',
          items: [
            {name: 'nodejs', img: 'assets/img/knowledges/nodejs.png', expert: false, url: 'https://nodejs.org'},
            {name: 'NestJS', img: 'assets/img/knowledges/nestjs.png', expert: false, url: 'https://nestjs.com'},
            {name: 'Express', img: 'assets/img/knowledges/expressjs.png', expert: false, url: 'https://expressjs.com'},
          ],
        },
        {
          name: 'Bases de datos',
          items: [
            {name: 'mysql', img: 'assets/img/knowledges/mysql.png', expert: true, url: 'https://www.mysql.com'},
            {name: 'postgresql', img: 'assets/img/knowledges/postgresql.png', expert: false, url: 'https://www.postgresql.org'},
            {name: 'elastic', img: 'assets/img/knowledges/elastic.png', expert: false, url: 'https://www.elastic.co'},
            {name: 'cassandra', img: 'assets/img/knowledges/cassandra.Default', expert: false, url: 'http://cassandra.apache.org'},
            {name: 'mongodb', img: 'assets/img/knowledges/mongodb.png', expert: false, url: 'https://www.mongodb.com'},
            {name: 'db2', img: 'assets/img/knowledges/db2.png', expert: false, url: 'https://www.ibm.com/products/db2-database'},
          ],
        },
        {
          name: 'Cache',
          items: [
            {name: 'Redis', img: 'assets/img/knowledges/redis.png', expert: true, url: 'https://redis.io/'},
            {name: 'ElastiCache', img: 'assets/img/knowledges/elasticache.png', expert: false, url: 'https://aws.amazon.com/es/elasticache'},
            {name: 'Oracle Coherence', img: 'assets/img/knowledges/coherence.png', expert: false, url: 'https://www.oracle.com/middleware/technologies/coherence.html'},
            {name: 'Hazelcast', img: 'assets/img/knowledges/hazelcast.png', expert: false, url: 'https://hazelcast.com'},
          ],
        },
        {
          name: 'Eventos y Streaming',
          items: [
            {name: 'RabbitMQ', img: 'assets/img/knowledges/rabbitmq.png', expert: false, url: 'https://www.rabbitmq.com/'},
            {name: 'Apache Kafka', img: 'assets/img/knowledges/kafka.png', expert: false, url: 'https://kafka.apache.org/'},
          ],
        },
        {
          name: 'Big Data',
          items: [
            {name: 'Hadoop', img: 'assets/img/knowledges/hadoop.png', expert: false, url: 'https://hadoop.apache.org/'},
            {name: 'Apache Spark', img: 'assets/img/knowledges/spark.png', expert: false, url: 'https://spark.apache.org/docs/latest/index.html'},
            {name: 'Python', img: 'assets/img/knowledges/python.png', expert: false, url: 'https://www.python.org/'},
            {name: 'Pandas', img: 'assets/img/knowledges/pandas.png', expert: false, url: 'https://pandas.pydata.org/'},
            {name: 'NumPy', img: 'assets/img/knowledges/numpy.png', expert: false, url: 'https://numpy.org/'},
          ],
        },
        {
          name: 'Machine Learning',
          items: [
            {name: 'Tensor Flow', img: 'assets/img/knowledges/tensorflow.png', expert: false, url: 'https://www.tensorflow.org/'},
            {name: 'Spark MLlib', img: 'assets/img/knowledges/mllib.png', expert: false, url: 'https://spark.apache.org/docs/latest/ml-guide.html'},
          ]
        }
      ]
    },
    {
      name: 'Frontend',
      description: 'Herramientas, lenguajes y frameworks de la parte cliente',
      items: [
        {
          name: 'Lenguajes',
          items: [
            {name: 'HTML', img: 'assets/img/knowledges/html.png', expert: true, url: 'https://www.w3.org/html/'},
            {name: 'CSS', img: 'assets/img/knowledges/css.png', expert: true, url: 'https://www.w3.org/Style/CSS/Overview.en.html'},
            {name: 'JavaScript', img: 'assets/img/knowledges/js.png', expert: true, url: 'https://en.wikipedia.org/wiki/JavaScript'},
            {name: 'TypeScript', img: 'assets/img/knowledges/ts.png', expert: true, url: 'https://www.typescriptlang.org'},
          ],
        },
        {
          name: 'Frameworks',
          items: [
            {name: 'Angular', img: 'assets/img/knowledges/angular.png', expert: true, url: 'https://angular.io/'},
            {name: 'React', img: 'assets/img/knowledges/react.png', expert: false, url: 'https://reactjs.org/'},
            {name: 'Vue.js', img: 'assets/img/knowledges/vue.png', expert: false, url: 'https://vuejs.org/'},
            {name: 'jQuery', img: 'assets/img/knowledges/jquery.png', expert: true, url: 'https://jquery.com/'},
          ],
        },
        {
          name: 'Apps Híbridas',
          items: [
            {name: 'Ionic', img: 'assets/img/knowledges/ionic.png', expert: true, url: 'https://ionicframework.com/'},
            {name: 'Apache Cordova', img: 'assets/img/knowledges/cordova.png', expert: true, url: 'https://cordova.apache.org/'},
            {name: 'IBM MobileFirst', img: 'assets/img/knowledges/mobilefirst.png', expert: false, url: 'https://www.ibm.com/cloud/mobile-foundation'},
            {name: 'Xamarin', img: 'assets/img/knowledges/xamarin.png', expert: false, url: 'https://dotnet.microsoft.com/apps/xamarin'},
          ],
        },
        {
          name: 'Apps Nativas',
          items: [
            {name: 'Android', img: 'assets/img/knowledges/angular.png', expert: true, url: 'https://developer.android.com/'},
            {name: 'Kotlin', img: 'assets/img/knowledges/kotlin.png', expert: false, url: 'https://kotlinlang.org/'},
          ]
        },
      ]
    },
    {
      name: 'DevOps',
      description: 'Herramientas y paradigmas para despliegue, ejecución y operativa',
      items: [
        {
          name: 'Itegración Continua',
          items: [
            {name: 'Jenkins', img: 'assets/img/knowledges/jenkins.png', expert: true, url: 'https://jenkins.io/'},
            {name: 'GitLab CI', img: 'assets/img/knowledges/gitlab.png', expert: true, url: 'https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/'},
            {name: 'BitBucket Pipelines', img: 'assets/img/knowledges/bitbucket.png', expert: false, url: 'https://bitbucket.org/product/features/pipelines'},
            {name: 'Travis CI', img: 'assets/img/knowledges/travis.png', expert: false, url: 'https://travis-ci.org/'},
          ],
        },
        {
          name: 'Paradigmas de ejecución',
          items: [
            {name: 'Docker', img: 'assets/img/knowledges/docker.png', expert: true, url: 'https://www.docker.com/'},
            {name: 'Kubernetes', img: 'assets/img/knowledges/k8s.png', expert: true, url: 'https://kubernetes.io/'},
            {name: 'Cloud Foundry', img: 'assets/img/knowledges/cloudfoundry.Default', expert: false, url: 'https://www.cloudfoundry.org/'},
            {name: 'Serverless Framework', img: 'assets/img/knowledges/serverless-framework.png', expert: false, url: 'https://serverless.com/'},
          ],
        },
        {
          name: 'Herramientas de despliegue',
          items: [
            {name: 'Helm', img: 'assets/img/knowledges/helm.png', expert: true, url: 'https://helm.sh/'},
            {name: 'Ansible', img: 'assets/img/knowledges/ansible.png', expert: true, url: 'https://www.ansible.com/'},
            {name: 'Terrafom', img: 'assets/img/knowledges/terraform.png', expert: true, url: 'https://www.terraform.io/'},
          ],
        },
        {
          name: 'Entornos Cloud',
          items: [
            {name: 'AWS', img: 'assets/img/knowledges/aws.png', expert: true, url: 'https://aws.amazon.com/'},
            {name: 'Azure', img: 'assets/img/knowledges/azure.png', expert: false, url: 'https://azure.microsoft.com/'},
            {name: 'Google Cloud', img: 'assets/img/knowledges/googlecloud.png', expert: false, url: 'https://cloud.google.com/'},
            {name: 'IBM Cloud', img: 'assets/img/knowledges/ibmcloud.png', expert: false, url: 'https://www.ibm.com/cloud'},
            {name: 'Heroku', img: 'assets/img/knowledges/heroku.png', expert: false, url: 'https://www.heroku.com/'},
          ],
        },
        {
          name: 'Servidores',
          items: [
            {name: 'Tomcat', img: 'assets/img/knowledges/tomcat.png', expert: true, url: 'http://tomcat.apache.org/'},
            {name: 'WebSphere', img: 'assets/img/knowledges/websphere.png', expert: false, url: 'https://www.ibm.com/cloud/websphere-application-platform/'},
            {name: 'WildFly', img: 'assets/img/knowledges/wildfly.png', expert: false, url: 'https://wildfly.org/'},
            {name: 'nginx', img: 'assets/img/knowledges/nginx.png', expert: false, url: 'https://www.nginx.com/'},
            {name: 'httpd', img: 'assets/img/knowledges/httpd.png', expert: false, url: 'https://httpd.apache.org/'},
          ],
        },
        {
          name: 'Repositorios de código',
          items: [
            {name: 'GitHub', img: 'assets/img/knowledges/github.png', expert: true, url: 'https://github.com/'},
            {name: 'GitLab', img: 'assets/img/knowledges/gitlab.png', expert: true, url: 'https://about.gitlab.com/'},
            {name: 'BitBucket', img: 'assets/img/knowledges/bitbucket.png', expert: true, url: 'https://bitbucket.org/product'},
            {name: 'SVN', img: 'assets/img/knowledges/svn.png', expert: false, url: 'https://subversion.apache.org/'},
          ],
        },
        {
          name: 'Repositorios de artefactos',
          items: [
            {name: 'Nexus Repository', img: 'assets/img/knowledges/nexus.png', expert: true, url: 'https://www.sonatype.com/nexus-repository-oss'},
            {name: 'Jfrog Artifactory', img: 'assets/img/knowledges/artifactory.webp', expert: false, url: 'https://jfrog.com/artifactory/'},
          ],
        },
        {
          name: 'Gestión de dependencias y construcción',
          items: [
            {name: 'Maven', img: 'assets/img/knowledges/maven.png', expert: true, url: 'https://maven.apache.org/'},
            {name: 'npm', img: 'assets/img/knowledges/npm.png', expert: true, url: 'https://www.npmjs.com/'},
            {name: 'gulp', img: 'assets/img/knowledges/gulp.png', expert: false, url: 'https://gulpjs.com/'},
          ],
        },
        {
          name: 'Monitoring',
          items: [
            {name: 'ELK', img: 'assets/img/knowledges/elk.png', expert: true, url: 'https://www.elastic.co/es/what-is/elk-stack'},
            {name: 'Prometheus', img: 'assets/img/knowledges/prometheus.png', expert: false, url: 'https://prometheus.io/'},
            {name: 'Grafana', img: 'assets/img/knowledges/grafana.png', expert: false, url: 'https://grafana.com/'},
            {name: 'Splunk', img: 'assets/img/knowledges/splunk.webp', expert: false, url: 'https://www.splunk.com/'},
          ],
        },
        {
          name: 'API Gateway/Manager and Service Mesh',
          items: [
            {name: 'nginx controller', img: 'assets/img/knowledges/nginxcontroller.png', expert: true, url: 'https://www.nginx.com/products/nginx-controller/'},
            {name: 'Kong', img: 'assets/img/knowledges/kong.png', expert: false, url: 'https://konghq.com/'},
            {name: 'Istio', img: 'assets/img/knowledges/istio.png', expert: false, url: 'https://istio.io/'},
          ],
        },
        {
          name: 'Redes',
          items: [
            {name: 'Cloudflare', img: 'assets/img/knowledges/cloudflare.png', expert: true, url: 'https://www.cloudflare.com/'},
            {name: 'WatchGuard', img: 'assets/img/knowledges/watchguard.png', expert: true, url: 'https://www.watchguard.com/'},
            {name: 'DNS', img: 'assets/img/knowledges/dns.png', expert: true, url: 'https://en.wikipedia.org/wiki/Domain_Name_System'},
          ],
        },
      ],
    },
    {
      name: 'Otros',
      description: 'Otros asuntos del ecosistema de desarrollo',
      items: [
        {
          name: 'Seguridad',
          items: [
            {name: 'JWT', img: 'assets/img/knowledges/jwt.png', expert: true, url: 'https://jwt.io/'},
            {name: 'Let\'s Encrypt', img: 'assets/img/knowledges/letsencrypt.png', expert: true, url: 'https://letsencrypt.org/'},
            {name: 'OAuth', img: 'assets/img/knowledges/oauth.png', expert: false, url: 'https://oauth.net/'},
            {name: 'OpenSSL', img: 'assets/img/knowledges/openssl.png', expert: false, url: 'https://www.openssl.org/'},
            {name: 'AWS Cognito', img: 'assets/img/knowledges/cognito.png', expert: false, url: 'https://aws.amazon.com/es/cognito/'},
            {name: 'Auth0', img: 'assets/img/knowledges/auth0.png', expert: false, url: 'https://auth0.com/'},
            {name: 'Anchore', img: 'assets/img/knowledges/anchore.png', expert: false, url: 'https://anchore.com/'},
            {name: 'Jasypt', img: 'assets/img/knowledges/jasypt.png', expert: false, url: 'http://www.jasypt.org/'},
          ],
        },
        {
          name: 'Testing',
          items: [
            {name: 'jUnit', img: 'assets/img/knowledges/junit.png', expert: true, url: 'https://junit.org/'},
            {name: 'Mockito', img: 'assets/img/knowledges/mockito.png', expert: true, url: 'https://site.mockito.org/'},
            {name: 'Cucumber', img: 'assets/img/knowledges/cucumber.png', expert: false, url: 'https://cucumber.io/'},
            {name: 'Selenium', img: 'assets/img/knowledges/selenium.jpeg', expert: false, url: 'https://www.selenium.dev/'},
            {name: 'jMeter', img: 'assets/img/knowledges/jmeter.png', expert: true, url: 'https://jmeter.apache.org/'},
            {name: 'Postman', img: 'assets/img/knowledges/postman.png', expert: true, url: 'https://www.postman.com/'},
            {name: 'SoapUI', img: 'assets/img/knowledges/soapui.png', expert: false, url: 'https://www.soapui.org/'},
            {name: 'TDD', img: 'assets/img/knowledges/tdd.png', expert: true, url: 'https://en.wikipedia.org/wiki/Test-driven_development'},
          ],
        },
        {
          name: 'QA',
          items: [
            {name: 'SonarQube', img: 'assets/img/knowledges/sonarqube.png', expert: true, url: 'https://www.sonarqube.org/'},
            {name: 'TSLint', img: 'assets/img/knowledges/tslint.png', expert: true, url: 'https://palantir.github.io/tslint/'},
          ],
        },
        {
          name: 'Metodología',
          items: [
            {name: 'Scrum', img: 'assets/img/knowledges/scrum.png', expert: true, url: 'https://www.scrum.org/'},
            {name: 'Kanban', img: 'assets/img/knowledges/kanban.png', expert: true, url: 'https://en.wikipedia.org/wiki/Kanban'},
            {name: 'Jira', img: 'assets/img/knowledges/jira.png', expert: true, url: 'https://www.atlassian.com/software/jira'},
            {name: 'Trello', img: 'assets/img/knowledges/trello.png', expert: true, url: 'https://trello.com/'},
            {name: 'Pivotal Tracker', img: 'assets/img/knowledges/pivotal.png', expert: false, url: 'https://www.pivotaltracker.com/'},
          ],
        },
        {
          name: 'Comunicaciones',
          items: [
            {name: 'Google Chat', img: 'assets/img/knowledges/googlechat.jpeg', expert: true, url: 'https://gsuite.google.com/products/chat/'},
            {name: 'Slack', img: 'assets/img/knowledges/slack.png', expert: false, url: 'https://slack.com/'},
            {name: 'Skype', img: 'assets/img/knowledges/skype.png', expert: false, url: 'https://www.skype.com/'},
          ],
        },
        {
          name: 'IDEs',
          items: [
            {name: 'IntelliJ Idea', img: 'assets/img/knowledges/intellij.png', expert: true, url: 'https://www.jetbrains.com/idea/'},
            {name: 'Eclipse', img: 'assets/img/knowledges/eclipse.png', expert: true, url: 'https://www.eclipse.org/ide/'},
            {name: 'Visual Studio Code', img: 'assets/img/knowledges/vsc.ico', expert: true, url: 'https://code.visualstudio.com/'},
            {name: 'Android Studio', img: 'assets/img/knowledges/androidstudio.png', expert: false, url: 'https://developer.android.com/studio'},
          ],
        },
        {
          name: 'Documentación',
          items: [
            {name: 'Swagger', img: 'assets/img/knowledges/swagger.png', expert: true, url: 'https://swagger.io/'},
            {name: 'AsciiDoc', img: 'assets/img/knowledges/asciidoc.png', expert: false, url: 'http://asciidoc.org/'},
            {name: 'Confluence', img: 'assets/img/knowledges/confluence.png', expert: false, url: 'https://www.atlassian.com/software/confluence'},
          ],
        },
        {
          name: 'Principios',
          items: [
            {name: 'Microservicios', img: 'assets/img/knowledges/microservices.webp', expert: true, url: 'https://martinfowler.com/articles/microservices.html'},
            {name: 'Arq. Hexagonal', img: 'assets/img/knowledges/hexagonal.png', expert: false, url: 'https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)'},
            {name: 'CQRS', img: 'assets/img/knowledges/cqrs.png', expert: false, url: 'https://martinfowler.com/bliki/CQRS.html'},
            {name: 'Serverless', img: 'assets/img/knowledges/serverless.png', expert: false, url: 'https://en.wikipedia.org/wiki/Serverless_computing'},
            {name: 'Extreme programming', img: 'assets/img/knowledges/xp.png', expert: true, url: 'https://en.wikipedia.org/wiki/Extreme_programming'},
            {name: 'SOLID', img: 'assets/img/knowledges/solid.png', expert: true, url: 'https://en.wikipedia.org/wiki/SOLID'},
            {name: 'KISS', img: 'assets/img/knowledges/kiss.png', expert: true, url: 'https://simple.wikipedia.org/wiki/KISS_(principle)'},
            {name: 'Patrones de diseño', img: 'assets/img/knowledges/patterns.png', expert: false, url: 'https://en.wikipedia.org/wiki/Software_design_pattern'},
          ],
        },
      ],
    },
  ];

  preferred: KnowledgeItem[] = [
    {name: 'Java', img: 'assets/img/knowledges/java.png', expert: true, url: 'https://www.java.com'},
    {name: 'Micronaut', img: 'assets/img/knowledges/micronaut.png', expert: true, url: 'https://micronaut.io'},
    {name: 'Angular', img: 'assets/img/knowledges/angular.png', expert: true, url: 'https://angular.io/'},
    {name: 'TypeScript', img: 'assets/img/knowledges/ts.png', expert: true, url: 'https://www.typescriptlang.org'},
    {name: 'GitLab', img: 'assets/img/knowledges/gitlab.png', expert: true, url: 'https://about.gitlab.com/'},
    {name: 'Kubernetes', img: 'assets/img/knowledges/k8s.png', expert: true, url: 'https://kubernetes.io/'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
