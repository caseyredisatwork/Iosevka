sudo mkdir -p /usr/local/share/fonts/TTF/iosevka-aile-code
sudo chmod 555 /usr/local/share/fonts/TTF/iosevka-aile-code
sudo cp ./dist/iosevka-aile-code/TTF-Unhinted/* /usr/local/share/fonts/TTF/iosevka-aile-code/
sudo chmod 444 /usr/local/share/fonts/TTF/iosevka-aile-code/*
sudo fc-cache
sudo mkfontscale /usr/local/share/fonts/TTF/iosevka-aile-code
sudo mkfontdir /usr/local/share/fonts/TTF/iosevka-aile-code
sudo xset +fp /usr/local/share/fonts/TTF/iosevka-aile-code # Inform the X server of new directories
sudo xset fp rehash                # Forces a new rescan
xlsfonts | grep "iosevka aile code"
