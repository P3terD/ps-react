<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use App\Http\Requests\StoreProdutoRequest;
use App\Http\Requests\UpdateProdutoRequest;
use Illuminate\Support\Facades\Storage;

class ProdutoController extends Controller
{
    private Produto $produto;

    public function __construct(Produto $produto) {
        $this->produto = $produto;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json($this->produto->all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProdutoRequest $request)
    {
        $data = $request->validated();
        if($request->hasFile('imagem')) {
            $data['imagem'] = $request->file('imagem')->store('imagem', 'public');
        }

        $produto = $this->produto->create($data);
        return response()->json($produto);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $produto = $this->produto->find($id);
        return response()->json($produto);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProdutoRequest $request, $id)
    {
        $data = $request->validated();
        $produto = $this->produto->find($id);
        if($request->hasFile('imagem')) {
            Storage::disk('public')->delete($produto->imagem);
            $data['imagem'] = $request->file('imagem')->store('imagem', 'public');
        }

        $produto->update($data);
        return response()->json($produto);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $produto = $this->produto->find($id);
        Storage::disk('public')->delete($produto->imagem);
        $produto->delete();
        return 'Produto deletado';
    }
}
