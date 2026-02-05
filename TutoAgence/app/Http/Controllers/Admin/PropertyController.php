<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Property;
use App\Http\Requests\Admin\PropertyFormRequest;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;

class PropertyController extends Controller
{

    public function index()
    {
                return view('admin.property.index',
                ['properties' => Property::orderBy('created_at','desc')->paginate(25)
            ]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $property = Property::create([
            'surface'=> 40,
            'rooms'=> 3,
            'bedrooms'=> 1,
            'floor'=> 0,
            'city'=>'Montpellier',
            'postal_code'=> 34000,
            'sold'=> false,
        ]);
        return view('admin.property.form',[
            'property' => $property 

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PropertyFormRequest $request)
    {
        $property= Property::create($request→validated());
        return_to_route('admin.property.index');//→with('success', 'Le bien a bien été créé');


    }

    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
