﻿using System;
using System.ComponentModel.DataAnnotations;

namespace MM_Crypto
{
    public class Wallet
    {
        public int ID { get; set; }

        [Required]
        public string? Brand { get; set; }

        [Required]
        public string? Model { get; set; }

        [Required]
        [Url]
        public string? Website { get; set; }

        [Required]
        [Range(0, 1000)]
        public int? Price { get; set; }

        [Required]
        [Url]
        public string? ImageURL { get; set; }

        [Required]
        public string? Categorie { get; set; }
    }
}
