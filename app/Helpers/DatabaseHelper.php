<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Schema;

class DatabaseHelper
{
    /**
     * Determine if column are existed in specified table
     *
     * @param string|null $table
     * @param string $column
     * @param array $extra_columns = []
     * @return boolean
     */
    public static function columnExisted(string $table = null, string $column, array $extra_columns = [])
    {
        $columns = $table ? Schema::getColumnListing($table) : [];
        $table_columns = array_merge($columns, $extra_columns);

        return in_array($column, $table_columns);
    }
}