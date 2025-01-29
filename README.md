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

## Sample to create UUIDs with Zuplo to Supabase

### How to test?

Using https://httpie.io/ CLI:

#### Create a single UUID

```
http POST https://zuplo-supabase-main-e782f60.d2.zuplo.dev/create-uuid
```

#### Create multiple UUIDs

```
http POST https://zuplo-supabase-main-e782f60.d2.zuplo.dev/create-uuid-batch count:=5
```

#### Create a UUID with metadata

```
http POST https://zuplo-supabase-main-e782f60.d2.zuplo.dev/create-uuid-with-metadata metadata:='{"key": "value"}'
```

Using Postman:

![CleanShot 2023-08-18 at 16 59 18@2x](https://github.com/aabedraba/zuplo-supabase/assets/27779735/dccd14a2-a629-490c-acba-354bd56c44cb)
