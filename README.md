# personal-website
My personal website documenting my professional and academic careers, projects, and maybe some interests.

## Testing locally
```bash
python3 -m http.server 9000
```

If using wsl2, use the following to get the ip address, otherwise use ```localhost```:
```bash
ip a
```

Open a browser and enter ```<ip>:9000``` into your address bar.

Although this website is a simple HTML+CSS+JS website, it uses certian features that are blocked by certain browsers if you simply open the html files.

## Changing the color scheme
See ```:root``` in ```style.css``` for color variable definitions