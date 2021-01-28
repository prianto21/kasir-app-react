import { Button,Image } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sukses extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
          <Image src="assets/images/notif_sukses.png" width="500" />
        <h2>Sukses Pesan</h2>
        <p>Terima kasih sudah pesan</p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}
