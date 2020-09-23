#!/bin/bash
# Authors : kyle leoneiso
# Date: 09/22/2020
sudo cp /var/log/syslog ~
cd ~
sudo chmod 640 syslog
sudo grep --color=always -E 'error' ~/syslog > ~/Documents/lab_4/kyleFile.txt
sendmail kyle9639@colorado.edu  < ~/Documents/lab_4/kyleFile.txt

