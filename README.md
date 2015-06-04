Struttura
---------

    root
     |- __build__/
         |- build.js            -> il file contenente tutta l'applicazione, generato da webpack
     |- app/
         |- actions/            -> action creators
         |- components/         -> file dei componenti (con eventuali sottocartelle)
         |- config/             -> file di configurazione (percorsi API, routing...)
         |- constants/          -> costanti
         |- dispatcher/         -> dispatcher
         |- stores/             -> stores locali
         |- utils/              -> utilities varie
         |- App.js              -> entry point dell'applicazione
     |- test/                   -> contiene il framework di testing e il file di test
         |- tests.js            -> il file principale per il testing, eventuali altri files devono essere inclusi in questo file
     |- .gitignore              -> gitignore
     |- .jshintrc               -> configurazione di jshint
     |- db.json                 -> database json per json-server
     |- index.html              -> la pagina principale dell'applicazione
     |- npm-shrinkwrap.json     -> lo stato delle dipendenze, generato al momento del deploy
     |- package.json            -> descrizione dell'applicazione e delle sue dipendenze
     |- README.md               -> questo file
     |- webpack.config.js       -> configurazione di webpack


Scripts
-------

    - start
        attiva il server webpack-dev-server
        webpack-dev-server --inline --host 0.0.0.0
        npm start
    - deploy
        imposta l'ambiente node di produzione, genera il file globale minificato e lo shrinkwrap delle dipendenze
        NODE_ENV=production webpack -p && npm shrinkwrap
        npm run deploy
    - test
        esegue i test nella console
        babel-node test/tests.js
        npm test
    - check
        esegue un check dei pacchetti node installati
        npm-check -s
        npm run check
    - json-server
        avvia il json-server
        json-server --watch db.json
        npm run json-server


Gitignore
---------

    - node_modules/     -> sorgenti delle dipendenze - non versioniamo le dipendenze ma usiamo il file di shrinkwrap
                           per "bloccare" l'albero delle dipendenze quando viene fatto un deploy
    - __build__         -> cartella con il codice compilato, lo si dovrebbe ricompilare localmente
    - npm-debug.log     -> log degli errori di node
