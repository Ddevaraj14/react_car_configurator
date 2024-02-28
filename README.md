# react_car_configurator


Upload large file on Github, follow the steps below:

• Create a project on GitHub
• Clone the project:
	Open terminal & type the below:
	• cd [enter your folder path]
	• Type "git clone" add GitHub URL (git clone https://...)
	• After clone navigate inside the local repository

• Install Git LFS:
	• Type [ git lfs install ] press enter. You will get the message as below:
		Updated Git hooks.
		Git LFS initialized.

	• Type you large file size format [ git lfs track "*.gltf" ] press enter
		The file will start tracking & you will see the .gitattributes in your 				repository. Keep adding formats if required.
	
• Commit the project on GitHub:
	• git add .
	• git commit -m "LFS"
	• git push origin main (Add your branch if necessary)

Great job!

Youtube reference:
https://www.youtube.com/watch?v=dpZQFTXSfjs&ab_channel=teamerror_net


Git Attributes:

If you need to add the formats manually then follow the below formats:
----------------------------------------------------------------------

## Unity ##

*.cs diff=csharp text
*.cginc text
*.shader text

*.mat merge=unityyamlmerge eol=lf
*.anim merge=unityyamlmerge eol=lf
*.unity merge=unityyamlmerge eol=lf
*.prefab merge=unityyamlmerge eol=lf
*.physicsMaterial2D merge=unityyamlmerge eol=lf
*.physicMaterial merge=unityyamlmerge eol=lf
*.asset merge=unityyamlmerge eol=lf
*.meta merge=unityyamlmerge eol=lf
*.controller merge=unityyamlmerge eol=lf


## git-lfs ##

#Image
*.jpg filter=lfs diff=lfs merge=lfs -text
*.jpeg filter=lfs diff=lfs merge=lfs -text
*.png filter=lfs diff=lfs merge=lfs -text
*.gif filter=lfs diff=lfs merge=lfs -text
*.psd filter=lfs diff=lfs merge=lfs -text
*.ai filter=lfs diff=lfs merge=lfs -text
*.tif filter=lfs diff=lfs merge=lfs -text

#Audio
*.mp3 filter=lfs diff=lfs merge=lfs -text
*.wav filter=lfs diff=lfs merge=lfs -text
*.ogg filter=lfs diff=lfs merge=lfs -text

#Video
*.mp4 filter=lfs diff=lfs merge=lfs -text
*.mov filter=lfs diff=lfs merge=lfs -text

#3D Object
*.FBX filter=lfs diff=lfs merge=lfs -text
*.fbx filter=lfs diff=lfs merge=lfs -text
*.blend filter=lfs diff=lfs merge=lfs -text
*.obj filter=lfs diff=lfs merge=lfs -text

#ETC
*.a filter=lfs diff=lfs merge=lfs -text
*.exr filter=lfs diff=lfs merge=lfs -text
*.tga filter=lfs diff=lfs merge=lfs -text
*.pdf filter=lfs diff=lfs merge=lfs -text
*.zip filter=lfs diff=lfs merge=lfs -text
*.dll filter=lfs diff=lfs merge=lfs -text
*.unitypackage filter=lfs diff=lfs merge=lfs -text
*.aif filter=lfs diff=lfs merge=lfs -text
*.ttf filter=lfs diff=lfs merge=lfs -text
*.rns filter=lfs diff=lfs merge=lfs -text
*.reason filter=lfs diff=lfs merge=lfs -text
*.lxo filter=lfs diff=lfs merge=lfs -text
*.bc filter=lfs diff=lfs merge=lfs -text

----------------------------------------------------------------------
