puts 'Welcome to a custom website company'
puts 'Enter the name of your website'
name = gets.chomp

system("touch #{name}.html")

File.open("#{name}.html"'w') { |html|
  html.write("
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Title of the document</title>
    </head>

    <body>
    hi
    </body>

    </html>
    ")}
