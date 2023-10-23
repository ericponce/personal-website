# personal-website
My personal website documenting my professional and academic careers, projects, and maybe some interests.
For fun, it was designed to minimally use external libraries and frameworks (except for jQuery). 

## Deployment
This repository is connected to AWS Amplify and will automatically deploy on a new commit. If there are issues, navigate to the AWS console to force a deployement

## Testing locally
```bash
python3 -m http.server 9000
```

If using wsl2, use the following to get the ip address, otherwise use ```localhost```:
```bash
ip a
```

Open a browser and enter ```<ip>:9000``` into your address bar.

Although this website is a simple HTML+CSS+JS website, it uses certain features that are blocked by certain browsers if you simply open the html files.

## Changing the color scheme
See ```:root``` in ```style.css``` for color variable definitions
