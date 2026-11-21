```shell
git add --all 
git commit -m "dev"
git push --set-upstream origin main

# Создать новую ветку без истории
git checkout --orphan temp

# Добавить все файлы
git add -A

# Создать один коммит
git commit -m "Initial commit"

# Заменить текущую ветку
git branch -D main
git branch -m main

# Перезаписать историю на GitHub
git push -f origin main
```