# Temporarily save your current changes
git stash push -m "WIP: composer edits"

# Now switch to the release branch
git checkout release/v7.3.0

# Create your new feature branch
git checkout -b feature/B2B-25473/oac-doc-update-for-product-category-product

# (Optional) Bring your stashed changes back if needed
git stash pop
