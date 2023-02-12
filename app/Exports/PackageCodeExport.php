<?php

namespace App\Exports;

use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Excel;

class PackageCodeExport implements FromCollection, Responsable, WithMapping, WithHeadings, ShouldAutoSize
{
    use Exportable;

    protected $data;

    /**
     * Construct payload
     *
     * @param array $data
     * @return void
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
    * It's required to define the fileName within
    * the export class when making use of Responsable.
    */
    private $fileName = 'package-codes.xlsx';
    
    /**
    * Optional Writer Type
    */
    private $writerType = Excel::XLSX;
    
    /**
    * Optional headers
    */
    private $headers = [
        'Content-Type' => 'text/csv',
    ];

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return app('PackageCodeService')->index($this->data);
    }

    /**
     * Headings
     *
     * @return array
     */
    public function headings(): array
    {
        return [
            'Code',
            'Status',
            'Seller'
        ];
    }

    /**
    * Column
    * 
    * @var App\Models\PackageCode $code
    * @return array
    */
    public function map($code): array
    {
        return [
            $code->code,
            ! empty($code->claimed_at) ? 'Claimed' : 'Available',
            $code->seller->first_name . ' ' . $code->seller->last_name
        ];
    }
}
