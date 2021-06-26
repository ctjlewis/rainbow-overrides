#!/bin/bash

git config --global user.name '${{github.actor}}' && \
git config --global user.email '${{github.actor}}@users.noreply.github.com' && \
git add --all && \
git stage --all && \
(git commit -m 'chore: refresh with updates from `tokens/`' || true) && \
git push