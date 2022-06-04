# 获取当前分支名
branch=`git symbolic-ref --short -q HEAD`

# 获取所有分支上最新 tag
#tag=`git describe --tags $(git rev-list --tags --max-count=1)`
tag=`git describe --dirty --always --tags`

cat > src/version.js <<EOF
export const branch = '$branch'
export const tag = '$tag'
EOF
