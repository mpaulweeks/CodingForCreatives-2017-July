```
for dir in students/*/; do mkdir -- "$dir/assignment"; done
echo students/*/assignment/ | xargs -n 1 cp filename
```
