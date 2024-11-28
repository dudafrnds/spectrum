if not exist ".\spectrum-db" (
    mkdir ".\spectrum-db"
)

"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath .\spectrum-db