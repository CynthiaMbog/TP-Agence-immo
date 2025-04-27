@php
$label ??=null;
$type ??='text';
$class ??=null;
$name ??='';

@endphp




<div @class(["form-control",$class])>
<label for ="{{ $name }}"> </label>
<input type="{{ $type }}" id="{{ $name }}" name="{{ $name }}">
</div>