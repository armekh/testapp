<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel+React</title>

    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/app.css')}}" /> 

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
{{--  <div class="relative  items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
        <h2 class="text-uppercase pb-4">example of react</h2>
        <div id="index"></div>
        <div id="login"></div>
    </div> --}}

    <div id="app"></div>

</body>

<script src="/js/app.js"></script>

</html>