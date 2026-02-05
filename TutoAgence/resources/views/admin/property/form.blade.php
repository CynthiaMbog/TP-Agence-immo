@extends('admin.admin')
@section('title',$property->exists?"Editer un bien":"créer un bien")

@section('content')
    <h1>@yield('title')</h1>

<form class="vstack gap-2" action="{{route($property ->exists? 'admin.property.update':'admin.property.store',$property)}}" method="post"> 

@csrf
@method($property->exists? 'put': 'post')

<div class="row">   
  @include('shared.input', ['class'=>'col', 'label'=>'Titre','name'=>'title','value'=>$property->title])
<div class="col row"> 
  @include('shared.input', ['class'=>'col','name'=>'Price','label'=>'Prix','value'=>$property->price]) 
</div>
@include('shared.input', ['type'=>'textarea','name'=>'description','value'=>$property->description])

<div class="row"> 
@include('shared.input', ['class'=>'col', 'label'=>'Pièces','name'=>'rooms','value'=>$property->rooms])
@include('shared.input', ['class'=>'col', 'label'=>'chambres','name'=>'bedrooms','value'=>$property->bedrooms])
@include('shared.input', ['class'=>'col', 'label'=>'Etages','name'=>'floor','value'=>$property->floor])
</div>

<div class="row"> 
@include('shared.input', ['class'=>'col', 'label'=>'Adresse','name'=>'adress','value'=>$property->adress])
@include('shared.input', ['class'=>'col', 'label'=>'Ville','name'=>'city','value'=>$property->city])
@include('shared.input', ['class'=>'col', 'label'=>'Code postal','name'=>'postal_code','value'=>$property->postal_code])
</div>

@include('shared.checkbox', ['label'=>'vendu','name'=>'sold','value'=>$property->sold])

<div>
<button class="btn btn-primary">
    @if($property->exists)
      Modifier
    @else
       Créer
   
       @endif

    </button>
</div>
</form> 
    @endsection 