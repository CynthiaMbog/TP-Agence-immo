@extends('admin.admin')

@section('content')
<div class="d-flex justify-content-between align-items-center">
<h1 class="mb-4">Les biens</h1>
<a href="#" class="btn btn-primary">Ajouter un bien</a>
</div>

<table class="table table-striped">
    <thead>
        <tr>
            <th>Titre</th>
            <th>Surface</th>
            <th>Prix</th>
            <th>Ville</th>
            <th class="text-end">Actions</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($properties as $property)
        <tr>
            <td>{{$property->title}}</td>
            <td>{{$property->surface}}m²</td>
            <td>{{number_format($property->price, thousands_separator:' ')}}</td>
            <td>{{$property->city}}</td>
            <td class="text-end">
                <a href="{{route('admin.property.edit', $property->id)}}">Modifier</a>
                <a href="{{route('admin.property.destroy', $property->id)}}">Supprimer</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

{{$properties->links()}}

@endsection
