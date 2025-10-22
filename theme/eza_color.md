uu=2      # a user that’s you                 = dimmed
gu=2      # a group that you belong to        = dimmed
uw=96     # the user-write permission bit     = bright cyan
ur=96     # the user-read permission bit      = bright cyan
ue=96     # the user-execute for other file kinds               = bright cyan
ux=96     # the user-execute permission bit for regular files   = bright cyan
gr=36     # the group-read permission bit     = cyan
gw=36     # the group-write permission bit    = cyan
gx=36     # the group-execute permission bit  = cyan
tr=34     # the others-read permission bit    = blue
tw=34     # the others-write permission bit   = blue
tx=34     # the others-execute permission bit = blue
nb=32     # the numbers of a file’s size if it is lower than 1 KB/Kib             = green
nk=32     # the numbers of a file’s size if it is between 1 KB/KiB and 1 MB/MiB   = green
nm=33     # the numbers of a file’s size if it is between 1 MB/MiB and 1 GB/GiB   = yellow
ng=31     # the numbers of a file’s size if it is between 1 GB/GiB and 1 TB/TiB   = red
nt=31     # the numbers of a file’s size if it is 1 TB/TiB or higher              = red
da=34     # a file’s date                                                         = blue
lm=4;31   # a number of hard links for a regular file with at least two           = underline red
do=32     # a regular file that is a document (ex: office suite document or PDF)  = green
sc=0      # a regular file that is source code                                    = normal

###
oc : the permissions displayed as octal

su : setuid, setgid, and sticky permission bits for files
sf : setuid, setgid, and sticky for other file kinds

xa : the extended attribute indicator

sn : the numbers of a file’s size (sets nb, nk, nm, ng and nt)
sb : the units of a file’s size (sets ub, uk, um, ug and ut)
ub : the units of a file’s size if it is lower than 1 KB/Kib
uk : the units of a file’s size if it is between 1 KB/KiB and 1 MB/MiB
um : the units of a file’s size if it is between 1 MB/MiB and 1 GB/GiB
ug : the units of a file’s size if it is between 1 GB/GiB and 1 TB/TiB
ut : the units of a file’s size if it is 1 TB/TiB or higher

df : a device’s major ID
ds : a device’s minor ID

uR : a user that's root
un : a user that’s someone else

gR : a group related to root
gn : a group you aren’t a member of

lc : a number of hard links

ga : a new flag in Git
gm : a modified flag in Git
gd : a deleted flag in Git
gv : a renamed flag in Git
gt : a modified metadata flag in Git
gi : an ignored flag in Git
gc : a conflicted flag in Git
Gm : main branch of repo
Go : other branch of repo
Gc : clean branch of repo
Gd : dirty branch of repo
xx : “punctuation”, including many background UI elements

in : a file’s inode number
bl : a file’s number of blocks
hd : the header row of a table
lp : the path of a symlink
cc : an escaped character in a filename
bO : the overlay style for broken symlink paths
sp : special (not file, dir, mount, exec, pipe, socket, block device, char device, or link)
mp : a mount point

im : a regular file that is an image
vi : a regular file that is a video
mu : a regular file that is lossy music
lo : a regular file that is lossless music
cr : a regular file that is related to cryptography (ex: key or certificate)
co : a regular file that is compressed
tm : a regular file that is temporary (ex: a text editor's backup file)
cm : a regular file that is a compilation artifact (ex: Java class file)
bu : a regular file that is used to build a project (ex: Makefile)

ic : the icon (this is optional, if not set the icon color matches the file name's)

Sn : No security context on a file
Su : SELinux user
Sr : SELinux role
St : SELinux type
Sl : SELinux level
ff : BSD file flags
