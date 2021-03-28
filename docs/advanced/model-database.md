---
title: 数据库关联
order: 2
group:
  title: 进阶使用
  order: 4
---

## 如何利用 coa-mysql 实现数据库表关系映射及查询关联

主要利用强大的`coa-helper`工具类中的`attach`方法将数据整合。

假设目前有`mAlbum`,`mAlbumPhoto`,`mPhoto`,`mUser` 四个数据模型，分别对应数据库表：相册表，相册照片关联表，照片表，用户表

### 一对一

一个用户只能有一个相册

```typescript
const list = await mUser.selectIdList(() => {});
await $.attach(list, 'user_id', '', ids => mUser.mGetByIds(ids));
await $.attach(list, 'album_id', 'albumInfo', ids => mAlbum.mGetByIds(ids));
return list; //[user_id:'xxx',name:'xxx',album_id:'xxx',albumInfo:{album_id:'xxx',name:'xxx'}]
```

### 一对多

一个用户有多个照片

```typescript
const query: Query = qb => {
  qb.where({ user_id: xxx });
};
const list = await mPhoto.selectIdList(query);
await $.attach(list, 'photo_id', '', ids => mPhoto.mGetByIds(ids));
await $.attach(list, 'user_id', 'userInfo', ids => mPhoto.mGetByIds(ids));
return list; //[photo_id:'xxx',src:'xxx',user_id:'xxx',userInfo:{user_id:'xxx',name:'xxx'}]
```

### 多对多

每个相册可以有多个照片，每个照片可以属于不同的相册

```typescript
const list = await mAlbumPhoto.selectIdList(() => {});
await $.attach(list, 'album_photo_id', '', ids => mAlbumPhoto.mGetByIds(ids));
await $.attach(list, 'album_id', 'albumInfo', ids => mAlbum.mGetByIds(ids));
await $.attach(list, 'photo_id', 'photoInfo', ids => mPhoto.mGetByIds(ids));
return list; //[{album_photo_id:'xxx', album_id:'xxx', albumInfo:{album_id:'xxx',name:'xxx'},photo_id:'xxx',photoInfo:{photo_id:'xxx',src:'xxx'}}]
```

当然这只是一种思路，并不是局限于如此使用，如果使用了 coa-redis 与 coa-mysql 一起操作。只需要修改模块为对应方法名即可，操作不便。
