<?php

namespace App\Traits;

trait ModelTrait
{
    /**
     * Scope to Add a where with like operator to the query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $q
     * @param mixed $column
     * @param string $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeWhereLike($q, $column, string $value)
    {
        return $q->where($column, 'like', $value);
    }

    /**
     * Scope to Add a where with not like operator to the query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $q
     * @param mixed $column
     * @param string $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeWhereNotLike($q, $column, string $value)
    {
        return $q->where($column, 'not like', $value);
    }

    /**
     * Scope to Add a orWhere with like operator to the query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $q
     * @param mixed $column
     * @param string $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOrWhereLike($q, $column, string $value)
    {
        return $q->orWhere($column, 'like', $value);
    }

    /**
     * Scope to Add a orWhere with not like operator to the query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $q
     * @param mixed $column
     * @param string $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOrWhereNotLike($q, $column, string $value)
    {
        return $q->orWhere($column, 'not like', $value);
    }

    /**
     * Scope a query to Add a search with dynamic columns to the query
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $q
     * @param  string $search
     * @param  array $columns
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSearch($q, string $search, array $columns)
    {
        return $q->where(function ($q) use ($search, $columns) {
            foreach ($columns as $key => $column) {
                if (!$key) {
                    $q->whereLike($column, '%' . $search . '%');
                } else {
                    $q->orWhereLike($column, '%' . $search . '%');
                }
            }
        });
    }
}
