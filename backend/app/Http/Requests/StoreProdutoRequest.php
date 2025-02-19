<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProdutoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nome'=>'required',
            'descricao'=>'required',
            'quantidade'=>['required', 'numeric'],
            'imagem'=>'image|mimes:jpg,png,jpeg',
            'categoria_id'=>'required',
            'preco' => ['required', 'numeric', 'regex:/^\d+(.\d{1,2})?$/'],
        ];
    }
}
