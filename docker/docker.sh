#!/usr/bin/env bash

# This script meant to be run from repository root.
# Optional arguments looks like: us.gcr.io/tangome-staging/lwc:8.3.2-e5e97ad-202201211415

docker build -f docker/Dockerfile -t lwc:latest .

if [ $# -eq 0 ]
then
    echo "Publishing skipped as no arguments (publish tag) supplied."
else
    for publish_tag in "$@"
    do
        echo "Publishing $publish_tag..."
        docker tag lwc:latest "$publish_tag"
        docker push "$publish_tag"
        docker rmi "$publish_tag"
    done
fi