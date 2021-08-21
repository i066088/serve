# express-static-service for debug purpose

As an example to illustrate how to debug JS in browser and Node.

## Debug JS in HTML 1

**Launch mode**

`.vscode/launch.json`

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "https://localhost:8444/hello.html",
            "webRoot": "${workspaceFolder}/public"
        }
    ]
}
```

![image-20210820102339428](C:\Users\i066088\Downloads\express-static-service\image-20210820102339428.png)





you can click this restart button to refresh

![image-20210820102527705](C:\Users\i066088\Downloads\express-static-service\image-20210820102527705.png)





## Debug JS in HTML 2

**Attach mode**

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Attach to Chrome",
            "port": 9222,
            "request": "attach",
            "type": "pwa-chrome",
            "url": "https://localhost:8444/hello.html",
            "webRoot": "${workspaceFolder}/public"
        }
    ]
}
```

The chrome should be open in remote debugging mode:

```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
```

![image-20210820103105708](C:\Users\i066088\AppData\Roaming\Typora\typora-user-images\image-20210820103105708.png)





## Debug remote JS in HTML 1

Run a second server in port number 8445

This URL is running:

https://localhost:8445/hello.html

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-chrome",
            "request": "launch",
            "name": "Launch Chrome against remote server",
            "url": "https://localhost:8445/hello2.html",
            "webRoot": "${workspaceFolder}/public"
        }
    ]
}
```



![image-20210820113717622](C:\Users\i066088\AppData\Roaming\Typora\typora-user-images\image-20210820113717622.png)

