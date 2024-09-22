## React Project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- Command to check code deploy agent logs
sudo cat /var/log/aws/codedeploy-agent/codedeploy-agent.log


# Run on the ec2
sudo apt update -y
sudo apt install ruby-full -y
sudo apt install wget -y
cd /home/ubuntu
wget https://aws-codedeploy-us-east-1.s3.us-east-1.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto


#   check status 
systemctl status codedeploy-agent

# to start
systemctl start codedeploy-agent