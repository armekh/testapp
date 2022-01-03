<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/app.css')}}" />
    <!-- Styles -->
    

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
        #test{
            background-color: #e5e5f3;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            column-gap: 2rem;
            row-gap: 2rem;
            padding: 30px;            
        }
        #test>div{
            background-color: #fff;
        }
    </style>
</head>

<body class="antialiased container">
    <div id="header"></div>
    <div class="relative  items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
        <h2 class="text-uppercase pb-4">example of react</h2>
        <div id="index"></div>
        <div id="login"></div>
    </div>
{{--     
    <div id="test">
        <div>11111111111111</div>
        <div>222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi cum maxime necessitatibus, asperiores deleniti repellendus sed officia dolores, officiis incidunt itaque eaque. Quibusdam deserunt nulla atque ratione, mollitia dolores?</div>
        <div>3333  3333 333 llendus sed officia dolores, officiis incidunt itaque eaque. Quibusdam deserunt nulla atque ratione, mollitia dolores?</div>
        <div>444</div>
        <div>5555 5 5 5 5555555</div>
    </div> --}}
</body>

<script src="/js/app.js"></script>

</html>