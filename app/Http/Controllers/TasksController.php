<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TasksController extends Controller
{
    public function index(){
        return Task::all();
    }

    public function show($id){
        return Task::find($id);
    }

    public function store(Request $request){
        return Task::create($request->all());
    }  
    
    public function update(Request $request, $id){
        $task = Task::findOrFail($id);
        $task->update($request->all());
        return $task;
    }
    
    public function delete(Request $request, $id){
        $task = Task::findOrFail($id);
        $task->delete();
        return 204;
    }

    


}
