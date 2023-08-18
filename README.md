## Sample to upload a file with Zuplo to Supabase

### How to test? 

Using https://httpie.io/ CLI: 

```
http -f POST https://zuplo-supabase-main-e782f60.d2.zuplo.dev/upload \
 trackFile@./example.txt \
 name="Lingus - Snarky Puppy" \
 duration="10:43" \
 unreleased="false"
```

Using Postman: 

![Uploading CleanShot 2023-08-18 at 15.59.18@2x.png…]()
