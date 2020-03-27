hugo
aws s3 sync ./public s3://hpskolan-public-prod \
 --delete \
 --acl bucket-owner-full-control \
 --acl public-read \
--cache-control max-age=31536000,public

aws cloudfront create-invalidation --distribution-id E5597Q907SW9D --paths '/*'