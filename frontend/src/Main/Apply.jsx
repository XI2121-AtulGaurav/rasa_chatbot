import React from 'react';

function Apply({ title }) {
  return (
    <div className="col-md-8 my-4 px-3">
      <h3>{title}</h3>
      <hr />
      <p className="mb-5"><b>Rasa is a framework for developing AI powered, industrial grade chatbots. It's incredibly powerful, and is used by developers worldwide to create chatbots and contextual assistants. ... You don't need any machine learning or prior chatbot development experience. However, you should be familiar with Python programming.</b></p>

      <h3>Installation Of Project</h3>
      <hr />
      <h4>Backend Installation</h4>
      <p className="mb-3">As per recommendation from Rasa documentation, it is advisable to install & run rasa projects in python virtual environment. Please follow below steps to create & install rasa in virtual environment:
               </p>
      <p>Installing Rasa - Windows 10</p>
      <ol><b>
        <li className="mb-1">Clone & extract the repository in your system.</li>
        <li className="mb-1">Open command prompt (cmd) at root directory, execute dir & you should see "requirements.txt" file in output list.</li>
        <li className="mb-1">Confirm python installation by executing "python3 --version" in "cmd", you should see python version installed in output.</li>
        <li className="mb-1">To create virtual environment execute "python3 -m venv ./venv" in cmd. This will create venv directory.</li>
        <li className="mb-1">To activate virtual envrionment execute ".\venv\Scripts\activate" in "cmd". Now you should see your command prompts starting with (venv)C:\>...
        This means, any python package we install, that will be installed in this virtual environment only. Running programs will utilise packages
                 from virtual environment.</li>
        <li className="mb-1">Execute pip3 install -U pip in cmd to make sure pip is up to date.</li>
        <li className="mb-1">Finally execute "pip3 install -r ./requirements.txt" to install Rasa & its dependencies.
                   This can take lot of time depending on network speed.</li>
        <li className="mb-1">To avoid installation errors, It is important to install Rasa & dependencies
                from provided "requirements.txt" file only.</li>
        <li className="mb-1">After installation is done, execute pip3 list, this will list all the packages installed
                inside your virtual envrionment (venv).</li>
        <li className="mb-1">Execute rasa --version & you should see output like below
                  <ol>
            <li> Rasa Version     : 2.2.5</li>
            <li> Rasa SDK Version : 2.2.0</li>
            <li> Rasa X Version   : None</li>
            <li> Python Version   : 3.7.3</li>
            <li> Operating System : .....</li>
            <li> Python Path      : .....</li>
          </ol></li></b>
      </ol>
      <h4>Training Rasa Model - Windows 10</h4>
      <hr />
      <p className="mb-5" >For the purpose of this guide, a sample rasa project is included in backend directory. This project was generated using command rasa init inside virtual environment.</p>
      <ol><b>
        <li className="mb-1">Make sure you are in the root directory of project, execute dir & you should see requirements.txt file in output list.</li>
        <li className="mb-1">If cmd prompt doesn't show (venv) at start of prompts, then you should activate venv by executing .\venv\Scripts\activate. Now you should see your command prompts starting with (venv)C:\>...</li>
        <li className="mb-1">Execute cd backend in cmd, execute dir & confirm config.yml file in output list.</li>
        <li className="mb-1">Before running Rasa project, you should train the model. To do that execute rasa train, this will generate trained model file inside models folder. This can take upto 3-4 minutes, depending upon the chatbot training data.</li>
        <li className="mb-1">After training is done, open credentials.yml file in text editor such as vs code & make sure following lines are present in the file
                <ol>
            <li>socketio:</li>
            <p className="mb-0">user_message_evt: user_uttered</p>
            <p className="mb-0">bot_message_evt: bot_uttered</p>
            <p className="mb-0">session_persistence: false</p>
          </ol>
          <p>Indentation is very important in yml files. Line 2, 3 & 4 are indented by 1-tab space.</p>
        </li>
        <li className="mb-1">Finally run the rasa project by executing rasa run --cors "*" in cmd. This will start the rasa server like below:
                     <p className="mb-0">2021-01-21 01:23:32 INFO     rasa.model  - Loading model models/20210121-011915.tar.gz...</p>
          <p className="mb-0">2021-01-21 01:23:32 INFO     root  - Starting Rasa server on http://localhost:5005</p>
          <p className="mb-0">2021-01-21 01:23:32 INFO     rasa.model  - Loading model models/20210121-011915.tar.gz...</p>
          <p className="mb-0">2021-01-21 01:23:40 INFO     root  - Rasa server is up and running.</p>
        </li>
        <br />
        <li className="mb-1">Keep this running in cmd. The backend setup is complete here.</li>
       </b> </ol>
      <h3>Frontend Installation & Setup</h3>
      <hr />
      <p className="mb-3">The frontend is a React Js project. The main component used for chatbot is an open source widget rasa-webchat.
               Feel free to go through its documentation.</p>
      <h5>Install Frontend dependencies - Windows 10</h5>
      <ol>
        <li className="mb-1">Launch new command prompt window at the root directory of cloned repository , execute dir & you should see requirements.txt file in output list.
              </li>
        <li className="mb-1">Execute cd frontend, then execute dir & you should see package.json file.
              </li>
        <li className="mb-1">To install all dependencies, execute npm install. This may take upto 3-4 minutes.</li>
        <li className="mb-1">Inside frontend folder, & inside src you will see config.js file (/frontend/src/config.js). This is were you need to specify socketUrl we obtained in step 6 above. You can modify initPayload to initial intent your bot is configured for.
                Other properties like title, subtitle, etc.. can also be modified to customised bot.</li>
        <li className="mb-2">Lastly execute npm run start in cmd. You should see below output in cmd</li>
        <p className="mb-3">Compiled successfully!</p>
        <p className="mb-3">You can now view rasa-chatbot-ui in the browser.</p>
        <p className="mb-0">Local:           <a href=" http://localhost:3000">http://localhost:3000</a></p>
        <p className="mb-3">On Your Network:  <a href="http://192.168.0.102:3000">http://192.168.0.102:3000</a></p>
        <p className="mb-0">Note that the development build is not optimized.</p>
        <p className="mb-3">To create a production build, use npm run build.</p>

        <li>Open http://localhost:3000 in browser
              & you should see chatbot at bottom right of webpage like in right.</li>
      </ol>

    </div>
  );
}

export default Apply;