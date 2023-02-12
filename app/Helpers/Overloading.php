<?php

namespace App\Helpers;

class Overloading
{
    /**
     * Data holder
     *
     * @var array
     */
    public $data = [];

    /**
     * Set index value
     *
     * @param $name
     * @param $value
     * @return void
     */
    public function __set($name, $value)
    {
        $this->data[$name] = $value;
    }

    /**
     * Get index value
     *
     * @param $name
     * @return mixed
     */
    public function __get($name)
    {
        return $this->data[$name] ?? null;
    }
}
