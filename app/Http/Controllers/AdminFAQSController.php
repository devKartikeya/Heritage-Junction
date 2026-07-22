<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminFAQSController extends Controller
{
    public function index()
    {
        $faqs = Faq::all();
        return Inertia::render('Admin/FAQS/FAQS', [
            'faqs' => $faqs
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/FAQS/Create');
    }
    public function store(Request $request)
    {

        $validated = $request->validate([

            'question' => 'required',

            'answer' => 'required',

            'category' => 'required',

            'sort_order' => 'required|integer',

        ]);

        FAQ::create($validated);

        return redirect()
            ->route('admin.faqs.index')
            ->with(
                'success',
                'FAQ created successfully.'
            );
    }
    public function edit(FAQ $faq)
{
    return Inertia::render(
        'Admin/FAQS/Edit',
        [
            'faq' => $faq
        ]
    );
}
public function update(
    Request $request,
    FAQ $faq
)
{

    $validated = $request->validate([

        'question' => 'required',

        'answer' => 'required',

        'category' => 'required',

        'sort_order' => 'required|integer',

    ]);

    $faq->update($validated);

    return redirect()
        ->route('admin.faqs.index')
        ->with(
            'success',
            'FAQ updated successfully.'
        );

}
public function destroy(FAQ $faq)
{
    $faq->delete();

    return back()->with(
        'success',
        'FAQ deleted successfully.'
    );
}
}
