#!/bin/bash

REPO="ctjlewis/rainbow-token-list"

curl -XPOST \
  -u "${{github.actor}}:${{secrets.GITHUB_TOKEN}}" \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Content-Type: application/json" \
  https://api.github.com/repos/$REPO/actions/workflows/write.yaml/dispatches \
  -d '{"ref": "ref"}'