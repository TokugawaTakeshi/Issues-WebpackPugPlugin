# The repository for discussion https://github.com/webdiscus/pug-loader/discussions/16

## Experiment flow

### Step 1: Build the application with "pug-plain-loader" and "html-loader"

```bash
npm run build:dev
```

Open **Build/index.html** in browser.
If both labels displaying, both components with internal and external pug template has been loaded correctly.

![image](https://user-images.githubusercontent.com/41653501/174464596-7ef54e62-d0aa-4fe7-8322-ab1564103787.png)


### Step 2: Build the application with "pug-plugin"

Comment out lines **34-53** in **webpack.config.ts** and uncomment the lines **55-74**.
Then rebuild the application and open **Build/index.html**.

This time, it should be only one label:

![image](https://user-images.githubusercontent.com/41653501/174464684-632b9942-aa11-4006-ae28-d5c27ea445e0.png)

Check the warning message by developer tools:

![image](https://user-images.githubusercontent.com/41653501/174464696-ab701784-6d33-47e3-b64c-62dd74a56bf1.png)
