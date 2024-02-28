# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Upload large file on Github, follow the steps below:
• Create a project on GitHub
• Clone the project:
Open terminal & type the below:
• cd [enter your folder path]
• Type "git clone" add GitHub URL (git clone https://...)
• After clone navigate inside the local repository

• Install Git LFS:
• Type [ git lfs install ] press enter. You will get the message as below:
Updated Git hooks.
Git LFS initialized.

• Type you large file size format [ git lfs track "*.gltf" ] press enter
The file will start tracking & you will see the .gitattributes in your repository. Keep adding formats if required.

• Commit the project on GitHub:
• git add .
• git commit -m "LFS"
• git push origin main (Add your branch if necessary)

Great job!

Youtube reference:
https://www.youtube.com/watch?v=dpZQFTXSfjs&ab_channel=teamerror_net

Git Attributes:

## If you need to add the formats manually then follow the below formats:

## Unity

_.cs diff=csharp text
_.cginc text
\*.shader text

_.mat merge=unityyamlmerge eol=lf
_.anim merge=unityyamlmerge eol=lf
_.unity merge=unityyamlmerge eol=lf
_.prefab merge=unityyamlmerge eol=lf
_.physicsMaterial2D merge=unityyamlmerge eol=lf
_.physicMaterial merge=unityyamlmerge eol=lf
_.asset merge=unityyamlmerge eol=lf
_.meta merge=unityyamlmerge eol=lf
\*.controller merge=unityyamlmerge eol=lf

## git-lfs

#Image
_.jpg filter=lfs diff=lfs merge=lfs -text
_.jpeg filter=lfs diff=lfs merge=lfs -text
_.png filter=lfs diff=lfs merge=lfs -text
_.gif filter=lfs diff=lfs merge=lfs -text
_.psd filter=lfs diff=lfs merge=lfs -text
_.ai filter=lfs diff=lfs merge=lfs -text
\*.tif filter=lfs diff=lfs merge=lfs -text

#Audio
_.mp3 filter=lfs diff=lfs merge=lfs -text
_.wav filter=lfs diff=lfs merge=lfs -text
\*.ogg filter=lfs diff=lfs merge=lfs -text

#Video
_.mp4 filter=lfs diff=lfs merge=lfs -text
_.mov filter=lfs diff=lfs merge=lfs -text

#3D Object
_.FBX filter=lfs diff=lfs merge=lfs -text
_.fbx filter=lfs diff=lfs merge=lfs -text
_.blend filter=lfs diff=lfs merge=lfs -text
_.obj filter=lfs diff=lfs merge=lfs -text

#ETC
_.a filter=lfs diff=lfs merge=lfs -text
_.exr filter=lfs diff=lfs merge=lfs -text
_.tga filter=lfs diff=lfs merge=lfs -text
_.pdf filter=lfs diff=lfs merge=lfs -text
_.zip filter=lfs diff=lfs merge=lfs -text
_.dll filter=lfs diff=lfs merge=lfs -text
_.unitypackage filter=lfs diff=lfs merge=lfs -text
_.aif filter=lfs diff=lfs merge=lfs -text
_.ttf filter=lfs diff=lfs merge=lfs -text
_.rns filter=lfs diff=lfs merge=lfs -text
_.reason filter=lfs diff=lfs merge=lfs -text
_.lxo filter=lfs diff=lfs merge=lfs -text
\*.bc filter=lfs diff=lfs merge=lfs -text

---
