## Sample to upload a file with Zuplo to Supabase

### How to test? 

Using https://httpie.io/ CLI: 

```
http -f POST https://zuplo-supabase-main-e782f60.d2.zuplo.dev/upload \
 trackFile@./example.txt \
 name="Lingus - Snarky Puppy" \
 duration="10:43" \
 unreleased="false"
```

Using Postman: 

![CleanShot 2023-08-18 at 15 59 18@2x](https://github.com/aabedraba/zuplo-supabase/assets/27779735/dccd14a2-a629-490c-acba-354bd56c44cb)

