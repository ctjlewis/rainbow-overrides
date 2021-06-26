#!/bin/bash

REPO="ctjlewis/rainbow-token-list"

curl -XPOST \
  -u 'Authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Content-Type: application/json" \
  -d '{"ref": "service-compatibility"}' \
  https://api.github.com/repos/$REPO/actions/workflows/write.yaml/dispatches